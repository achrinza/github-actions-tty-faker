/*!
  SPDX-FileCopyrightText: 2020 The TTY Faker for GitHub Actions Authors
  SPDX-License-Identifier: BSD-3-Clause
*/

import { exec } from "child_process";

export class ActCliNotFoundError extends Error {}
export class UnsupportedOSError extends Error {}

/**
 * Ensures that the {@link https://github.com/nektos/act | act CLI} exists in
 * the path.
 * 
 * @throws {@link ActCliNotFoundError}
 * Thrown if the act CLI is not found in the environment's PATH.
 */
export function ensureActExists() {
  if (!['win32', 'darwin', 'linux'].includes(process.platform))
    throw new UnsupportedOSError();
}