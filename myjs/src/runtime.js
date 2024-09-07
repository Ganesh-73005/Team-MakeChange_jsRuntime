// runtime.js
((globalThis) => {
    const core = Deno.core;
    function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
    }
    const sarcasticPhrases = [
    "Oh, brilliant idea!", "Wow, never heard that one before...", "Oh, how original...",
    "Congratulations, you broke the code!", "Great job, you found a bug!", "Keep up the good work, genius!",
    "Oh, the brilliance is blinding...", "I'm in awe of your coding skills...",
    "You must be a real expert...", "Such a groundbreaking contribution...",
    "You should be a comedian...", "Sarcasm level: expert...",
    ];
    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      }
    globalThis.console = {
    log: (...args) => {
    core.print(`[out]: ${argsToMessage(...args)}\n`, false);
    },
    sarcasm: (...args) => {
    const time = getCurrentTime();
    const sarcasticMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)]
    const message = argsToMessage(...args) + `\n\x1b[1m${sarcasticMessage}\x1b[0m`;
    const logMessage = `\x1b[1;35m[${time}] [message]:\x1b[0m ${message}`;
    core.print(`${logMessage}\n`, true);
    },
    };
    })(globalThis);