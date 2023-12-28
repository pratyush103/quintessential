module quintessential.com {
    requires javafx.controls;
    requires javafx.fxml;

    opens quintessential.com to javafx.fxml;
    exports quintessential.com;
}
