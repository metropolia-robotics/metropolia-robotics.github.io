#include<iostream>
#include<chrono>

int main()
{
    using Clock = std::chrono::steady_clock;

    volatile double result = 0.0;

    auto start = Clock::now();

    for (int i=0; i < 1000000; ++i)
    {
        result = result + i * 0.001;
    }

    auto finish = Clock::now();

    double elapsed_ms = 
        std::chrono::duration<double, std::milli>(
            finish - start
        ).count();

    std::cout << "Execution time: " << elapsed_ms << " ms\n";

    return 0;

}