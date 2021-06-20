import * as core from '@actions/core'

declare global {
  interface String {
    isValidEnvVar(): Boolean;
  }
}

String.prototype.isValidEnvVar = function() {
  const matches =  this.match(/[A-Z0-9_]*/);
  return matches?.length == 1 && matches[0] == this;
}

function concatenate(first: string, second: string, separator: string): string {
  return first + separator + second;
}

function setEnvironmentVariable(key: string, value: string) {
  core.exportVariable(key, value);
};

async function run(): Promise<void> {
  try {
    const first = core.getInput('first');
    const second = core.getInput('second');
    const outputName = core.getInput('output-var-name');
    var separator = core.getInput('separator');

    if (!outputName.isValidEnvVar()) {
      core.setFailed('Invalid env var name. Please ony use uppercase letters, numbers and the underscore character');
    }

    if (separator == null) {
      separator = '';
    }

    const result = concatenate(first, second, separator);
    setEnvironmentVariable(outputName, result);

    core.info(`Created env var ${outputName} with this value: ${result}`);
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

// export default run
