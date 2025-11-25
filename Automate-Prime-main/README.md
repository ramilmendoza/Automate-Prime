
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Automate Prime - Python AI App

This is the Python Streamlit version of the Automate Prime landing page.

## Run Locally

**Prerequisites:**  Python 3.8+

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Set your API Key:
   Ensure your `GEMINI_API_KEY` (or `API_KEY`) is set in your environment variables.
   
   Linux/Mac:
   ```bash
   export API_KEY="your_key_here"
   ```
   
   Windows:
   ```bash
   set API_KEY="your_key_here"
   ```

3. Run the app:
   ```bash
   streamlit run app.py
   ```

## Features
- **AI Consultant:** Sidebar chat powered by Gemini 2.5 Flash.
- **Dynamic UI:** Dark mode aesthetic with 'Orbitron' and 'Rajdhani' fonts.
- **Information:** Services, Team, and Booking logic included.
