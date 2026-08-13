# Publication backbone access-coverage tradeoff

## Summary

Publication backbone access-coverage tradeoff is the choice between bibliographic corpora with different coverage, downloadability, automation access, and derivative-data rights.

## Canonical Form

- Unit of analysis: publication database, patent-paper matching backbone, license, coverage period, or field scope.
- Typical representation: database comparison table or validation note for matched citation links.
- Validation target: whether the chosen publication corpus is broad enough and legally usable enough for the intended linkage.
- Empirical signature: a database with better coverage may be unusable for public derivative releases, while an open database may have different metadata gaps.

## Uses in Science of Science

- Qualifies PCS construction using the [MAG publication backbone](../datasets/mag_publication_backbone.md).
- Provides a data-access counterpart to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Helps compare [Web of Science](../datasets/web_of_science.md), [Google Scholar](../datasets/google_scholar.md), and open infrastructure choices.
- Supports transparent release decisions for [open derivative patent-science linkage](../datasets/open_derivative_patent_science_linkage.md).

## Operationalization

- Compare candidate publication corpora on coverage, metadata fields, downloadable access, API limits, and redistribution rights.
- Record the corpus snapshot date and license.
- Test a sample of patent references against alternative backbones when possible.
- State whether link tables can be shared publicly or only analyzed internally.
- Revisit the tradeoff when corpus infrastructure changes, such as MAG discontinuation or OpenAlex updates.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) compares WOS, Google Scholar, and MAG as candidate publication backbones.
- The paper notes WOS and Scopus restrictions on derivative sharing, Google Scholar access limits, and MAG's open downloadable license.
- Marx and Fuegi choose MAG partly because its openness permits public release of patent-science links.
- The decision involves a coverage and access tradeoff rather than a universally best database.

## Caveats

- Open availability does not imply better metadata quality.
- Coverage changes over time, so old backbone comparisons can become stale.
- Legal redistributability and scientific representativeness are distinct requirements.

## Links

- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [Web of Science](../datasets/web_of_science.md)
- [Google Scholar](../datasets/google_scholar.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [open derivative patent-science linkage](../datasets/open_derivative_patent_science_linkage.md)
- [publication-spine findability ceiling](publication_spine_findability_ceiling.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `publication_backbone_access_coverage_tradeoff`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: publication backbone tradeoff; bibliographic access coverage tradeoff; patent-paper backbone choice; derivative rights coverage tradeoff
