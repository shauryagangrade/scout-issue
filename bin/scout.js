#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const skillPath = path.join(__dirname, '..', 'SKILL.md');
const skill = fs.readFileSync(skillPath, 'utf8');

console.log(skill);
