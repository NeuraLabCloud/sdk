from typing import Dict

class NeuralabSDK:
    def __init__(self, options: Dict[str, str]) -> None:
        self._options = options

    @property
    def get_options(self) -> Dict[str, str]:
        return {
            key: '~hidden~' if key == 'api_key' else self._options[key]
            for key in self._options
        }