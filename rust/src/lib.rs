use std::collections::HashMap;

pub struct NeuralabSDK {
    api_key: String,
}

impl NeuralabSDK {
    pub fn new(api_key: String) -> Self {
        Self { api_key }
    }

    pub fn get_options(&self) -> HashMap<String, String> {
        let mut options = HashMap::new();
        options.insert("api_key".to_string(), "null".to_string());
        options
    }
}