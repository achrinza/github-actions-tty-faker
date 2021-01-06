/*!
  SPDX-FileCopyrightText: 2020 The TTY Faker for GitHub Actions Authors
  SPDX-FileCopyrightText: Copyright (c) 2020, Yuri6037. All rights reserved.
  SPDX-License-Identifier: BSD-3-Clause AND LicenseRef-original
*/

import core from '@actions/core';
import exec from '@actions/exec';
import fs from 'fs';
import path from 'path';

const scriptDir = path.resolve(__dirname + '../script/');

core.exportVariable('TERM', 'xterm-256color');

switch (process.platform) {
case 'win32':
    core.addPath(scriptDir + 'win32');
    break;
case 'darwin':
    exec.exec('brew install expect');
    core.addPath(path.resolve(scriptDir, 'darwin'));
    fs.chmodSync(path.resolve(scriptDir, './darwin/faketty'), '0755');
    break;
case 'linux':
    core.addPath(path.resolve(scriptDir, 'linux'));
    fs.chmodSync(path.resolve(scriptDir, 'linux/faketty'), '0755');
default:
    throw new Error("Unsupported platform.");
}
