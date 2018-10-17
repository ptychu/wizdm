export {};// Ensure this is treated as a module.

declare global {

  interface String {
  /**
   * Turns a CamelCase string into an Hyphen delimited version of it
   * @example "wrongParrword".hyphenize();
   * @returns "wrong-password"
   */
    hyphenize(string): string;
  }
}

String.prototype.hyphenize = function(this: string, hyphen = '-'): string {
	return this.replace(/([A-Z])/g, $1 => {
        return hyphen + $1.toLowerCase();
  });
};