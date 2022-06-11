export enum Emojis {
  happy = ":smiling_face_with_smiling_eyes:",
  message = ":mailbox:",
  error = ":worried: ",
}

export interface SlackMessage {
  text: string;
  blocks?: any[];
  username?: string;
  icon_emoji?: string;
}

export const constructSlackMessage = (data: {
  notificationTitle: string;
  heading?: string;
  message?: string;
  url?: string;
  image?: string;
  username?: string;
  icon_emoji?: Emojis;
}): SlackMessage => {
  const { notificationTitle, heading, message, image, username, icon_emoji } = data;
  const blocks: any[] = [];
  if (heading) {
    blocks.push({
      type: "header",
      text: {
        type: "plain_text",
        text: heading,
      },
    });
    blocks.push({
      type: "divider",
    });
  }
  if (message) {
    blocks.push({ type: "section", text: { type: "mrkdwn", text: message } });
    blocks.push({
      type: "divider",
    });
  }
  if (image) {
    blocks.push({
      type: "image",
      block_id: "image4",
      image_url: image,
      alt_text: notificationTitle,
    });
    blocks.push({
      type: "divider",
    });
  }

  return { text: notificationTitle, blocks, username, icon_emoji };
};
