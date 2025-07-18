export const QuantityCounter = ({ min, max }) => `
    <div class="flex items-center">
        <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
            rounded-l-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
        </button>
        <input type="number" id="quantity-input" value="1" min="${min}" max="${max}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
            rounded-r-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
        </button>
    </div>
`;
