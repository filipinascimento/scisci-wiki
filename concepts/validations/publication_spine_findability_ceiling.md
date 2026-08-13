# Publication-spine findability ceiling

## Summary

Publication-spine findability ceiling is the validation motif that recall in a patent-to-science linkage is capped by whether the true cited work is findable in the publication database used as the matching backbone.

## Canonical Form

- Unit of analysis: known-good reference, cited scientific work, publication-backbone record, patent-paper match, or recall denominator.
- Typical representation: findable/unfindable label, database coverage comparison, recall ceiling, or missed true citation count.
- Validation target: distinguish matching-algorithm failure from absent or inaccessible publication metadata.
- Empirical signature: some manually confirmed scientific references cannot be recovered because the cited paper is not present or not discoverable in the publication spine.

## Uses in Science of Science

- Adds a backbone-coverage caveat to [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md).
- Links patent-science matching to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md), [MAG publication backbone](../datasets/mag_publication_backbone.md), [OpenAlex](../datasets/openalex.md), and [Dimensions](../datasets/dimensions.md).
- Explains why MAG-based releases such as [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md) need migration and coverage audits when reused with newer corpora.
- Helps interpret recall estimates separately from [patent-reference completeness noise](patent_reference_completeness_noise.md).

## Operationalization

- Build a manually validated sample of patent references to scientific works.
- Label each true scientific reference as findable or unfindable in the chosen publication backbone.
- Compute recall against the findable subset and report the implied full-reference ceiling separately.
- Compare findability across MAG, OpenAlex, Dimensions, PubMed, Web of Science, Google Scholar, or publisher metadata when access allows.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) reports that, in their known-good sample, 546 references were scientific but only 501 were judged findable in Microsoft Academic Graph.
- The paper contrasts PubMed, Web of Science, Google Scholar, and MAG as possible backbones with different coverage and access tradeoffs.
- This supports reporting a recall ceiling caused by publication-spine coverage before attributing all missed links to the matching algorithm.

## Caveats

- Findability depends on the snapshot date, identifier crosswalks, title normalization, language coverage, and access permissions.
- A work can be present in a database but hard to find because metadata are incomplete or variant.
- MAG is no longer updated, so old recall ceilings should not be treated as current OpenAlex or Dimensions ceilings.

## Links

- [known-good PCS recall set construction](known_good_pcs_recall_set_construction.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [bibliographic database staleness caveat](bibliographic_database_staleness_caveat.md)
- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [patent-reference completeness noise](patent_reference_completeness_noise.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `publication_spine_findability_ceiling`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: publication backbone recall ceiling; findable-reference denominator; bibliographic spine coverage ceiling; publication database findability limit
