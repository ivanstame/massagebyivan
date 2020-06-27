const gulp = require("gulp");
const hashsrc = require("gulp-hash-src");
const imagemin = require('gulp-imagemin');
const del = require('del');

// Task to delete target build/public folder
gulp.task('clean', function() {
  return del(['public/**', '!public']);
});

gulp.task(
  "imagemin",
  gulp.series(function minizingImages() {
    return gulp
      .src("./src/img/*")
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
          })
        ])
      )
      .pipe(gulp.dest("./public/img"));
  })
);

gulp.task("hash", function () {
    //grab the shit you need hashed
    return gulp.src(["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"], {base: "./src"})
        //tell this bitch where the assets in the file you need hashed can be found
        //build_dir = folder all the pre-hashed assets are
        //src_path = folder in the build_dir where the specific assets are 
        //exts = array specifin the file types in the src_path folder
        .pipe(hashsrc({ build_dir: "src", src_path: "img", exts: [".jpg", ".png", ".svg"]}))
        .pipe(hashsrc({build_dir: "src", src_path:"css", exts:[".css"]}))
        .pipe(hashsrc({build_dir: "src", src_path: "js", exts: [".js"]}))
        .pipe(gulp.dest("./public"))
});


gulp.task("default", gulp.series("clean", "imagemin", "hash"));


