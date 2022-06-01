#!/usr/bin/env python3

import csv
from datetime import datetime

def parse_date(date_str):
    date_str = date_str.replace('[edit]','').strip()
    format_str = '%b %d, %Y'
    try:
        date = datetime.strptime(date_str, format_str)
        return date
    except:
        return ""



with open('goodreads.csv') as file:
    csv_reader = csv.reader(file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count > 0:
            parsed_date = parse_date(row[6])
            if parsed_date != "":
                month_name = parsed_date.strftime("%b")
                date = f'{parsed_date.day} {month_name} {parsed_date.year}'
                date = f'Date Finished: {date}'
            else:
                date = ""
            print(
                    f'''
                    <div class="book-list-item">
                        <img src="/images/covers/placeholder.png" alt="{row[1]}" class="book-cover" />
                        <div>
                            <span>{row[1]}</span> by <span>{row[2]}</span>
                            <div>{date}</div>
                        </div>
                    </div>
                    '''
                    )
        line_count += 1
