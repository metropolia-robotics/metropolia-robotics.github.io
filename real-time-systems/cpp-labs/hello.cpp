
#include <iostream>
#include <chrono>
#include <thread>

int main()
{
    std::cout << "C++17 is working!\n";

    auto start = std::chrono::steady_clock::now();

    std::this_thread::sleep_for(
        std::chrono::milliseconds(20)
    );

    auto finish = std::chrono::steady_clock::now();

    double elapsed_ms =
        std::chrono::duration<double, std::milli>(
            finish - start
        ).count();

    std::cout << "Measured delay: "
              << elapsed_ms << " ms\n";

    return 0;
}
