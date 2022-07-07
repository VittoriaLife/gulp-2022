import svgsprite from "gulp-svg-sprite";


const svgSprite = () => {
  return app.gulp.src(app.path.src.svgSprite, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SVG',
        message: 'Error: <%= error.message %>'
      })))

      .pipe(svgsprite({
        mode: {
          stack: {
            sprite: `../icons/icons.svg`,
            // Создавать страницу с пречнем иконок
            example: true
          }
        }
      }))
      .pipe(app.gulp.dest(`${app.path.build.images}`));
}

export {svgSprite }