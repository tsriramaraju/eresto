import { WebClient } from "@slack/web-api";
import secrets from "../config/secrets";
import { SlackMessage } from "./constructSlackMessage";

export const sendSlackNotification = async (message: SlackMessage, channel?: string) => {
  try {
    // Read a token from the environment variables
    const token = secrets.slackSecret;

    // Initialize
    const web = new WebClient(token);
    await web.chat.postMessage({ ...message, channel: channel || "tech" });
  } catch (error) {
    console.log(error);
  }
};
