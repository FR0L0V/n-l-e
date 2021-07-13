const {src, dest, watch, series} = require('gulp');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const imagemin = require('gulp-imagemin');


let processStyles = () =>{
    return src(['src/css/styles.css', 'src/css/resp.css'])
    .pipe(autoprefixer({
        overrideBrowserslist :['last 10 versions']
    }))
    .pipe(cssmin())
    .pipe(dest('dist/css'));
}

let processScripts = () =>{
    return src('src/js/common.js')
    .pipe(rename('common.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
}

let watching = () =>{
    watch(['src/css/**/*.css'], processStyles);
    watch(['src/js/common.js'], processScripts);
}

let build = () =>{
    return src([
        'src/*.html',
        'src/fonts/**/*'
    ], {base:'src'})
    .pipe(dest('dist'));
}

let cleanDist = () =>{
  return del('dist')
}

let processImages = () =>{
    return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'))
}

exports.processStyles = processStyles;
exports.processScripts = processScripts;
exports.watching = watching;
exports.build = series(cleanDist, processImages, processScripts, processStyles, build);