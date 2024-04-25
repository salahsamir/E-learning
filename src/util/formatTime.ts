export function formatTime(
  date: Date,
  format: "long" | "short" | "time passed"
) {
  function formatShort(date: Date) {
    return `${date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;
  }

  function formatLong(date: Date) {
    return `${date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    })}`;
  }

  function formatTimePassed(date: Date) {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 7) {
      return `${days} days ago`;
    } else {
      return formatLong(date);
    }
  }

  switch (format) {
    case "long":
      return formatLong(date);
    case "short":
      return formatShort(date);
    case "time passed":
      return formatTimePassed(date);
    default:
      return formatLong(date);
  }
}
