import { InMemoryRepository } from './in-memory-repo';
import { Artist } from '../artist/artist';
import { Repository } from './repository';

describe('The in-memory repo repository', () => {

    let repo: Repository<Artist>;

    beforeEach(() => {
        // reset id
        repo = new InMemoryRepository<Artist>();
        repo.create(new Artist('Amy Winehouse', 'app/images/artist/winehouse.jpg'));
        repo.create(new Artist('Portishead', 'app/images/artist/portishead.jpg'));
        repo.create(new Artist('The Velvet Underground', 'app/images/artist/the-velvet-underground.jpg'));
        repo.create(new Artist('Roxy Music', 'app/images/artist/roxy-music.jpg'));
        repo.create(new Artist('The Doors', 'app/images/artist/the-doors.jpg'));
    });

    it('should support creating new artists', () => {
        repo.create(new Artist('The Streets'));
        expect(repo.all().length).toBe(6);
    });

    it('should support finding artists by their ID', () => {
        expect(repo.findById(0)).toBeDefined();
        expect(repo.findById(42)).toBeUndefined();
    });

    // FIXME: Properly implement findByName in InMemoryRepository class
    it('should allow finding artists by part of their name', () => {
        expect(repo.findByName('The').length).toBe(2);
    });

    it('should return all artists if no name is passed to findByName', () => {
      expect(repo.findByName(undefined).length).toBe(5);
      expect(repo.findByName('').length).toBe(5);
    });
});
