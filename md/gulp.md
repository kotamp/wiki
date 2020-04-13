# Gulp Cheatsheet

## gulp-concat

```
concat = require 'gulp-concat'

gulp.src ['./lib/file3.js', './lib/file2.js', './lib/file1.js']
.pipe concat 'all.js'
.pipe concat 'all.js, newLine: '\r\n'
.pipe concat path: 'new.js', stat: mode: 0666

```

## browser-sync

```
bs = require('browser-sync').create() # !important

serve = (done) ->
  bs.init server: baseDir: './'
  do done

reload = (done) ->
  do bs.reload
  do done

watch = gulp.watch '**', reload
```

## gulp-coffee

```
coffee = require 'gulp-coffee'

gulp.src('**')
.pipe coffee
  bare: true # removes top-level function safety wrapper
  header: false
  [transpile: obj]
```

