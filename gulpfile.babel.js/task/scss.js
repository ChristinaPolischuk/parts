import gulp from "gulp";

//config
import path from "../config/path";
import app from "../config/app";

//plugins
import loadPlugins from "gulp-load-plugins";

const gp = loadPlugins(app.loadPlugins);

export default () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe(gp.sassGlob())
        .pipe(gp.sass())
        .pipe(gp.webpCss())
        .pipe(gp.autoprefixer())
        .pipe(gp.shorthand())
        .pipe(gp.groupCssMediaQueries())
        .pipe(gp.size({title: "main-1.css"}))
        .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(gp.rename({suffix: ".min"}))
        .pipe(gp.csso())
        .pipe(gp.size({title: "main-1.min.css"}))
        .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}))
}

function makeColorSchemes(srcColorSchemes, src) {

}