export const textShrink = (text: string, letters: number) => {
  return <>{text.length >= letters ? text.substring(0, letters) + "..." : text} </>;
};
