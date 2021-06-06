import * as core from '@actions/core'

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

    if (separator == null) {
      separator = '';
    }

    const result = concatenate(first, second, separator);
    setEnvironmentVariable(outputName, result);


    core.info('Created env var ${outputName} with value: ${result}');
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
