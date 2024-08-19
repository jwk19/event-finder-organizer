
import axios from 'axios';
import App from '../App';


const API_KEY = 'S1rLcDpFA0qLgD1zWLMlBAXMExb6LHUs';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';
const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

// Function to fetch events based on query parameters
export const fetchEvents = async (query = {}) => {
  try {
    const response = await apiClient.get('events.json', {
      params: {
        ...query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchSearch = async (query)=>{
  try{
    let res = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=S1rLcDpFA0qLgD1zWLMlBAXMExb6LHUs&keyword=${query}`)
    let data = await res.json()
    return data._embedded.events

  }
  catch{

  }
}
// Function to fetch event categories
export const fetchEventCategories = async () => {
  try {
    const response = await apiClient.get('classifications.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching event categories:', error);
    throw error;
  }
};

// Function to fetch details of a single event
export const fetchEventDetail = async (id) => {
  try {
    const response = await apiClient.get(`events/${id}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
};