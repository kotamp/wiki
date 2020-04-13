fs = require 'fs'
path = require 'path'
gulp = require 'gulp'


build = (done) ->
  scripts = fs.readdirSync './build'
 
  scripts
  .forEach (e) ->
    require('./build/' + e)()


loadFile = (p) ->
  fs.readFileSync p, encoding: 'utf8'

eachFile = (p, fn) ->
  files = fs.readdirSync './md/', withFileTypes: true

  for f in files
    if f.isDirectory()
      forEachFile path.join(p, f.name), fn
    else if f.isFile()
      fn(path.join(p, f.name))


readme = (done) ->
  files = []

  eachFile './md/', (p) ->
    title = loadFile(p).split('\n')[0].slice(1).trim()
    files.push [p, title]

  files.sort (a, b) ->
   if a[0] < b[0] then -1 else if a[0] > b[0] then 1 else 0

  readmeLines = ["# wiki",""]

  for f in files
    readmeLines.push "+ [#{f[1]}](#{f[1]})"

  fs.createWriteStream 'README.md'
  .end readmeLines.join('\n')
  .on 'finish', -> 
    console.log 'done'
    done()





exports.default = build


