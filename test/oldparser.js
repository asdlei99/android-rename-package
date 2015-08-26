'use strict';

var path = require('path'),
    RenameHandler = require('../lib/core/renamehandler.js')

var rh = new RenameHandler(__dirname, "utf-8")
var mp

var newPackageName = 'cn.hiroz.android.test.project'

console.log('new package name => ' + newPackageName)
rh.setNewPackageName(newPackageName)

console.log('parse packageName: ')
mp = rh.obtainPackageName('./usecase/testmanifest.xml')
rh.rewriteAndroidManifest(mp.lines, mp, { })

console.log('parse resource: ')
mp = rh.parseResource('./usecase/testresource.xml')
console.log('rewrite resource: ')
rh.rewriteResource(mp.lines, mp, { })

console.log('parse androidManifest: ')
mp = rh.parseAndroidManifest('./usecase/testmanifest.xml')
rh.rewriteAndroidManifest(mp.lines, mp, { })

console.log('parse java: ')
mp = rh.parseJava('./usecase/testjava.java')
rh.rewriteJava(mp.lines, mp, { })