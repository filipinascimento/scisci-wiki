# Frontier-distance random citation null

## Summary

Frontier-distance random citation null estimates expected distance to a science-technology boundary under random citing entities with the same citation-count opportunity.

## Canonical Form

- Unit of analysis: focal paper, citing set, expected minimum distance, observed distance, or citation-count stratum.
- Typical representation: expected boundary distance conditional on how many future citations or citing entities a focal node receives.
- Validation target: distinguish structured science-technology separation from random short paths produced by citation volume.
- Empirical signature: observed distances differ systematically from expected random distances at comparable citation counts.

## Uses in Science of Science

- Provides a boundary-specific null model for [science-technology distance](../measures/science_technology_distance.md).
- Complements [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md) with a conditional expected-distance calculation.
- Helps interpret [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md).

## Operationalization

- For each focal paper or patent, condition on the number of relevant citing entities.
- Draw or analytically evaluate the minimum boundary distance expected from random citing entities.
- Compare observed mean distance by citation-count group with expected mean distance.
- Interpret systematic excess distance as evidence of structured knowledge communities.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) builds a null model for expected distance given a paper's citation count.
- The supplement derives the expected minimum distance from the distances of possible citing entities.
- The paper reports that observed distances are systematically larger than expected, indicating that the real network is more structured than a random citation opportunity model.

## Caveats

- The null model depends on the candidate pool of citing entities.
- Random citation assumptions can be too weak for fields with strong topical or institutional constraints.
- Expected-distance comparisons do not identify which mechanism creates the excess distance.

## Links

- [science-technology distance](../measures/science_technology_distance.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [indirect patent-paper distance distribution](../measures/indirect_patent_paper_distance_distribution.md)
- [citation-count pathway confound](citation_count_pathway_confound.md)
- [field-distance residual rank check](field_distance_residual_rank_check.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `frontier_distance_random_citation_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: random frontier-distance null; expected D citation null; citation-count-conditioned distance null; patent-paper distance null model
