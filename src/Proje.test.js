import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('Proje Test', () => {
    let header, emojiResult, input, emoji, list, text;

    beforeEach(() => {
        render(<App />);
        header = screen.getByText("Emoji Search");
        emojiResult = screen.getAllByText(/Click to copy emoji/i);
        emoji = "Joy";
        input = screen.getByTitle("input");
        list = screen.getByText(/grimacing/i);
        text = "Grimacing";
    });

    test('Header bölümü render edilmelidir...', () => {
        expect(header).toBeInTheDocument();
    });

    test('Emojiler render edilmelidir...', () => {
        expect(emojiResult.length).toEqual(20);
    });

    test('Emojiler doğru filtre edilip render edilmelidir...', () => {
        fireEvent.change(input, { target: { value: emoji } });
        expect(screen.getByText(emoji)).toBeInTheDocument();
    });

    test('Emojiler doğru kopyalanmalıdır...', () => {
        userEvent.click(list);
        expect(list).toHaveTextContent(text);
    });
})
