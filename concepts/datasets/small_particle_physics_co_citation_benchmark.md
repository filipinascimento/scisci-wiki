# Small particle-physics co-citation benchmark

## Summary

Treats Small's particle-physics example as a tiny historical benchmark with cited papers, co-citation strengths, bibliographic-coupling strengths, direct-citation indicators, and a displayed network.

## Canonical Form

- Unit of analysis: historical specialty example from a specific SCI snapshot.
- Typical representation: node list, edge tables, direct-citation indicators, and network figure.
- Dataset target: toy benchmark for co-citation algorithms and visualization checks.
- Empirical signature: a small hand-built case can be reconstructed and compared with modern implementations.

## Uses in Science of Science

- Provides a historical test case for [thresholded co-citation network](../representations/thresholded_co_citation_network.md) and co-citation algorithms.
- Useful for teaching how co-citation, bibliographic coupling, and direct citation differ on the same node set.
- Connects early co-citation methods to modern [science maps](../representations/science_maps.md).

## Operationalization

- Reconstruct the node list and edge table from Small's figure and tables.
- Attach modern identifiers where possible and preserve the original 1971 SCI snapshot provenance.
- Use the benchmark to test counting, thresholding, visualization, and relation-triangulation code.

## Evidence and Validations

- Verified full-text evidence from Small (1973) provides a particle-physics specialty example through Figure 1 and Tables 1 and 2.
- Those artifacts define a compact historical benchmark for co-citation mapping.

## Caveats

- It is a small, hand-built historical example, not a representative science-map benchmark.
- Modern identifier assignment may be uncertain for old cited-reference strings.

## Links

- [Co-citation](../representations/co_citation.md)
- [Thresholded co-citation network](../representations/thresholded_co_citation_network.md)
- [Citation-relation triangulation table](../validations/citation_relation_triangulation_table.md)
- [Science maps](../representations/science_maps.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `small_particle_physics_co_citation_benchmark`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: Small 1973 co-citation benchmark; particle-physics co-citation toy dataset; historical co-citation example dataset
