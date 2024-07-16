import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function getVideos() {
  try {
    const { data } = await api("/videos");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function createVideo(video) {
  try {
    const { data } = await api.post("/videos", video);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getVideoById(id) {
  try {
    const { data } = await api(`/videos/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function updateVideo({ id, video }) {
  try {
    const { data } = await api.put(`/videos/${id}`, video);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteVideo(id) {
  try {
    const { data } = await api.delete(`/videos/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
