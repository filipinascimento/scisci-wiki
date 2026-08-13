# PCS adoption barrier stack

## Summary

PCS adoption barrier stack is the layered reason patent citations to science have historically been underused: reference-type filtering, noisy strings, computational scale, and proprietary data restrictions all compound.

## Canonical Form

- Unit of analysis: patent non-patent reference, publication corpus, matching workflow, data license, or research team.
- Typical representation: barrier chain or workflow bottleneck map for patent-paper linkage.
- Mechanism target: why a seemingly valuable data source remains less used than patent-to-patent citations.
- Empirical signature: researchers face multiple sequential costs before patent-science links become analyzable and shareable.

## Uses in Science of Science

- Explains demand for [open derivative patent-science linkage](../datasets/open_derivative_patent_science_linkage.md).
- Links data-quality barriers to [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md) and [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md).
- Shows why [patent-reference year-token blocking](../methods/patent_reference_year_token_blocking.md) is needed at scale.
- Frames PCS as infrastructure for [science-technology distance](../measures/science_technology_distance.md) and technology-transfer research.

## Operationalization

- List each required step from raw patent references to usable patent-paper edges.
- Separate conceptual classification, string parsing, candidate generation, scoring, validation, licensing, and release barriers.
- Identify which barriers are solved by open data and which remain methodological.
- Record whether the final data product can be redistributed.
- Track adoption changes after a barrier is removed by a public release.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes why PCS are difficult to use despite their promise.
- The paper identifies unstructured patent reference strings, incomplete bibliographic details, massive pairwise comparison costs, and proprietary WOS or Scopus restrictions.
- It argues that the open MAG backbone and public release reduce the sharing barrier, while matching and validation barriers remain.
- This mechanism explains why patent-to-patent citations became common earlier even though PCS can be more directly tied to scientific knowledge.

## Caveats

- Barrier stacks differ across patent offices, publication databases, and time periods.
- Removing data-access barriers does not remove measurement error.
- Adoption can still be limited by downstream expertise and computational resources.

## Links

- [non-patent-reference science filtering](../methods/non_patent_reference_science_filtering.md)
- [patent-reference completeness noise](../validations/patent_reference_completeness_noise.md)
- [patent-reference year-token blocking](../methods/patent_reference_year_token_blocking.md)
- [open derivative patent-science linkage](../datasets/open_derivative_patent_science_linkage.md)
- [publication backbone access-coverage tradeoff](../validations/publication_backbone_access_coverage_tradeoff.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `pcs_adoption_barrier_stack`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: patent-science adoption barriers; PCS infrastructure barrier stack; patent-paper linkage bottlenecks; patent citation to science adoption barrier
