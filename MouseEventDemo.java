import java.awt.*;
import java.awt.event.*;

public class MouseEventDemo extends Frame implements MouseListener {

    Label l;

    MouseEventDemo() {
        // Create label
        l = new Label("Perform mouse actions inside the window");
        l.setBounds(50, 100, 300, 30);

        // Frame settings
        setTitle("Mouse Event Handling");
        setSize(400, 300);
        setLayout(null);
        setVisible(true);

        // Add components
        add(l);

        // Register mouse listener
        addMouseListener(this);

        // Close window
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                dispose();
            }
        });
    }

    // MouseListener methods
    public void mouseClicked(MouseEvent e) {
        l.setText("Mouse Clicked");
    }

    public void mousePressed(MouseEvent e) {
        l.setText("Mouse Pressed");
    }

    public void mouseReleased(MouseEvent e) {
        l.setText("Mouse Released");
    }

    public void mouseEntered(MouseEvent e) {
        l.setText("Mouse Entered");
    }

    public void mouseExited(MouseEvent e) {
        l.setText("Mouse Exited");
    }

    public static void main(String[] args) {
        new MouseEventDemo();
    }
}