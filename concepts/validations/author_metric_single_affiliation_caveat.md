# Author-metric single-affiliation caveat

## Summary

Author-metric single-affiliation caveat is the validation problem that author-level metric tables may assign one current institution or country even when the cited work was produced across multiple organizations.

## Canonical Form

- Unit of analysis: author, affiliation, country, institution, publication portfolio, author-metric table, or group evaluation.
- Typical representation: most-recent affiliation field, single-country assignment, affiliation simplification note, or multi-affiliation sensitivity check.
- Validation target: whether institution or country labels attached to author metrics represent the full provenance of the underlying work.
- Empirical signature: an author row has one affiliation and country label, while their publication history spans multiple institutions or countries.

## Uses in Science of Science

- Qualifies institutional, country, and group analyses built from the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Links author-metric tables to [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md), which preserves career movement rather than collapsing it to one current label.
- Protects [responsible metrics](../measures/responsible_metrics.md) users from attributing an author's whole citation record to a single current employer.
- Complements [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md), because correct person identity does not imply correct institutional attribution.

## Operationalization

- Record how affiliation and country are inferred in each author-level table.
- Distinguish current affiliation, most recent publication affiliation, affiliation at publication, and all historical affiliations.
- Avoid aggregating author-level citation indicators to institutions or countries from a single-affiliation field unless the interpretation is explicitly current-affiliation exposure.
- For institutional or country analyses, reconstruct publication-level affiliation histories or use fractional attribution by paper.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) states that institutional affiliation and country are inferred from the most recent publications in Scopus as of May 2018.
- The paper provides only one affiliation per scientist, while noting that scientists may have worked in several institutions.
- Ioannidis et al. clarify that all work in different institutions is still captured in the author record, so the single affiliation is a row label rather than a complete provenance assignment for the cited work.

## Caveats

- A current-affiliation label can be useful for contact, present institutional context, or current population descriptions.
- It is unsafe for credit allocation unless the research question explicitly concerns current affiliation.
- Multi-affiliation and mobility histories require additional normalization and disambiguation beyond the author-metric table.

## Links

- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [affiliation trajectory reconstruction](../methods/affiliation_trajectory_reconstruction.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Scopus author profile disambiguation audit](scopus_author_profile_disambiguation_audit.md)
- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [institutional mobility stratification](../mechanisms/institutional_mobility_stratification.md)
- [international mobility typologies](../measures/international_mobility_typologies.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_metric_single_affiliation_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: single-affiliation author metric caveat; most-recent affiliation simplification; author country attribution caveat; current-affiliation citation attribution
