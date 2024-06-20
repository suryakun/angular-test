import { Injectable } from '@angular/core';

export type Folder = {
  id: string;
  name: string;
  type: string;
  size: string;
  lastModified: string;
};

export type Storage = {
  id: string;
  image: string;
  title: string;
  creator: string;
  size: string;
  lastModified: string;
};

export type Collection = {
  id: string;
  title: string;
  type: 'folder' | 'storage';
  storage: Storage[];
  folders: Folder[];
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  protected data: Collection[] = []

  constructor() {
    this.data = [
      {
        id: '1',
        title: 'Folders',
        type: 'folder',
        storage: [],
        folders: [
          {
            id: '1',
            name: 'TVC Raw Uploads',
            type: 'folder',
            size: '1.2 GB',
            lastModified: '2021-06-01',
          },
          {
            id: '2',
            name: 'TVC Raw Uploads',
            type: 'folder',
            size: '1.2 GB',
            lastModified: '2021-06-01',
          },
          {
            id: '3',
            name: 'TVC Raw Uploads',
            type: 'folder',
            size: '1.2 GB',
            lastModified: '2021-06-01',
          },
        ],
      },
      {
        id: '2',
        title: 'Storage',
        type: 'storage',
        storage: [
          {
            id: '1',
            image: 'thumbnail.png',
            title: 'Avatar',
            creator: 'Michael Johnson',
            size: '732MB',
            lastModified: '2021-06-15',
          },
          {
            id: '2',
            image: 'thumbnail.png',
            title: 'The Shawshank Redemption',
            creator: 'Emma Davis',
            size: '651MB',
            lastModified: '2021-07-20',
          },
          {
            id: '3',
            image: 'thumbnail.png',
            title: 'Forrest Gump',
            creator: 'John Anderson',
            size: '589MB',
            lastModified: '2021-08-05',
          },
          {
            id: '28',
            image: 'thumbnail.png',
            title: 'The Godfather',
            creator: 'Olivia Wilson',
            size: '821MB',
            lastModified: '2021-09-25',
          },
          {
            id: '29',
            image: 'thumbnail.png',
            title: 'Pulp Fiction',
            creator: 'Daniel Lee',
            size: '703MB',
            lastModified: '2021-10-10',
          },
          {
            id: '30',
            image: 'thumbnail.png',
            title: 'Fight Club',
            creator: 'Sophia Martinez',
            size: '624MB',
            lastModified: '2021-11-30',
          },
          {
            id: '1',
            image: 'thumbnail.png',
            title: 'Avatar',
            creator: 'Michael Johnson',
            size: '732MB',
            lastModified: '2021-06-15',
          },
          {
            id: '2',
            image: 'thumbnail.png',
            title: 'The Shawshank Redemption',
            creator: 'Emma Davis',
            size: '651MB',
            lastModified: '2021-07-20',
          },
          {
            id: '3',
            image: 'thumbnail.png',
            title: 'Forrest Gump',
            creator: 'John Anderson',
            size: '589MB',
            lastModified: '2021-08-05',
          },
          {
            id: '28',
            image: 'thumbnail.png',
            title: 'The Godfather',
            creator: 'Olivia Wilson',
            size: '821MB',
            lastModified: '2021-09-25',
          },
          {
            id: '29',
            image: 'thumbnail.png',
            title: 'Pulp Fiction',
            creator: 'Daniel Lee',
            size: '703MB',
            lastModified: '2021-10-10',
          },
          {
            id: '30',
            image: 'thumbnail.png',
            title: 'Fight Club',
            creator: 'Sophia Martinez',
            size: '624MB',
            lastModified: '2021-11-30',
          },
          {
            id: '1',
            image: 'thumbnail.png',
            title: 'Avatar',
            creator: 'Michael Johnson',
            size: '732MB',
            lastModified: '2021-06-15',
          },
          {
            id: '2',
            image: 'thumbnail.png',
            title: 'The Shawshank Redemption',
            creator: 'Emma Davis',
            size: '651MB',
            lastModified: '2021-07-20',
          },
          {
            id: '3',
            image: 'thumbnail.png',
            title: 'Forrest Gump',
            creator: 'John Anderson',
            size: '589MB',
            lastModified: '2021-08-05',
          },
          {
            id: '28',
            image: 'thumbnail.png',
            title: 'The Godfather',
            creator: 'Olivia Wilson',
            size: '821MB',
            lastModified: '2021-09-25',
          },
          {
            id: '29',
            image: 'thumbnail.png',
            title: 'Pulp Fiction',
            creator: 'Daniel Lee',
            size: '703MB',
            lastModified: '2021-10-10',
          },
          {
            id: '30',
            image: 'thumbnail.png',
            title: 'Fight Club',
            creator: 'Sophia Martinez',
            size: '624MB',
            lastModified: '2021-11-30',
          },
          {
            id: '1',
            image: 'thumbnail.png',
            title: 'Avatar',
            creator: 'Michael Johnson',
            size: '732MB',
            lastModified: '2021-06-15',
          },
          {
            id: '2',
            image: 'thumbnail.png',
            title: 'The Shawshank Redemption',
            creator: 'Emma Davis',
            size: '651MB',
            lastModified: '2021-07-20',
          },
          {
            id: '3',
            image: 'thumbnail.png',
            title: 'Forrest Gump',
            creator: 'John Anderson',
            size: '589MB',
            lastModified: '2021-08-05',
          },
          {
            id: '28',
            image: 'thumbnail.png',
            title: 'The Godfather',
            creator: 'Olivia Wilson',
            size: '821MB',
            lastModified: '2021-09-25',
          },
          {
            id: '29',
            image: 'thumbnail.png',
            title: 'Pulp Fiction',
            creator: 'Daniel Lee',
            size: '703MB',
            lastModified: '2021-10-10',
          },
          {
            id: '30',
            image: 'thumbnail.png',
            title: 'Fight Club',
            creator: 'Sophia Martinez',
            size: '624MB',
            lastModified: '2021-11-30',
          },
        ],
        folders: [],
      },
    ]
  }

  getCollection(): Collection[] {
    return this.data
  }
}
