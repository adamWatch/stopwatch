export const formatTime = (time: number): string => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor(time / 3600000);

  
    const formatWithZero = (value: number): string => (value < 10 ? '0' + value : '' + value);
  
    return `${formatWithZero(hours)}:${formatWithZero(minutes)}:${formatWithZero(seconds)}.${Math.floor(
      milliseconds / 10
    )}`;
  };