export interface CommonEntity {
    id?: number;
    name: string;
}

/**
 * Common repository interface.
 */
export interface Repository<T extends CommonEntity> {

    /**
     * Returns a copy of all entities.
     *
     * @returns a copy of all entities
     */
    all(): T[];

    /**
     * Update the given entity.
     *
     * @param {number} id the ID of the entity to be updated
     * @param t the updated entity
     */
    update(id: number, t: T): void;

    /**
     * Find an entity by its ID.
     *
     * @param {number} id the ID of the entity which is to be found
     * @returns the entity if found, undefined otherwise
     */
    findById(id: number): T;

  /**
   * Find any entities by name matching.
   *
   * @param {string} name the name to look for
   * @returns an array of matched entities
   */
  findByName(name: string): T[];

    /**
     * Create and save the given entity.
     *
     * @param t the entity to be saved
     */
    create(t: T): void;

    /**
     * Remove an entity by its ID.
     *
     * @param {number} id the ID of the entity to be removed
     * @returns {boolean} true, if the entity has been removed, false otherwise
     */
    removeById(id: number): boolean;
}
