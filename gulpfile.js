                                    // Даём имя
let gulp = require('gulp'),
    sass = require('gulp-sass'),                       // конвертация sass&scss в css
    rename = require('gulp-rename'),                    // переименование
    browserSync = require('browser-sync'),               // автообновление окона в браузере
    autoprefixer = require('gulp-autoprefixer'),         // автопрефиксы для работы старых браузеров
    concat = require('gulp-concat'),                      //объединение множества файлов в 1         
    uglify = require('gulp-uglify'),                     //минификации js-файлов
    cssmin = require('gulp-cssmin');                       //минифицирование css        
    
    
                                            // Подключили SASS SCSS
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 version']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
                                                // Libs.min.css (Объединяет модули в 1 библиотеку)
gulp.task('style', function(){
    return gulp.src([
              //  Подключаем библиотеки
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',                 
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/rateyo/src/jquery.rateyo.css'
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});
                                                   // Libs.min.js (Объединяет модули в 1 библиотеку)
gulp.task('script', function(){
    return gulp.src([
              //  Подключаем библиотеки
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'node_modules/mixitup/dist/mixitup.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});
                                                // Автообновление html 
gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});
                                                // Автообновление js 
gulp.task('js', function(){
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});


                                                // Подключение Автообновления 
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
                                                //  Наблюдение за изменениями в css html js
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});


                                                // Default'ное включение модулей
gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'));