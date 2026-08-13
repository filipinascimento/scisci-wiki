# PCS companion publication denominator

## Summary

PCS companion publication denominator is the release of selected metadata for all backbone publications, not only cited papers, so cited-versus-uncited patent-science studies have a control surface.

## Canonical Form

- Unit of analysis: publication backbone record, cited paper, uncited paper, patent-paper link, or metadata snapshot.
- Typical representation: companion publication table released alongside patent-paper citation links.
- Dataset target: provide denominators and covariates for studies of which papers are cited by patents.
- Empirical signature: users can compare patent-cited papers against all eligible publications in the same backbone snapshot.

## Uses in Science of Science

- Extends the [Reliance on Science dataset](reliance_on_science_dataset.md) beyond edge lists.
- Makes the [MAG publication backbone](mag_publication_backbone.md) usable as a denominator rather than only a matching target.
- Supports [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md) because the denominator is snapshot-specific.
- Provides covariates for [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md) and field comparisons.

## Operationalization

- Release publication metadata for all papers in the matching backbone, including those with no patent citations.
- Include stable publication IDs, year, title, journal, authors, affiliations, and fields where available.
- Record the snapshot date and source corpus.
- Join patent-paper edges to the companion denominator for cited-versus-uncited analyses.
- Keep denominator updates versioned so counts do not silently change.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) describes public release of PCS linkages plus selected MAG metadata.
- The paper explains that selected metadata are included for cited and uncited articles, enabling researchers to study which scientific outputs receive patent attention.
- This companion table changes PCS from an edge-only resource into a study frame.
- It also makes the denominator dependent on MAG's snapshot coverage and metadata quality.

## Caveats

- The denominator includes only publications in the chosen backbone.
- MAG discontinuation makes historical snapshot documentation essential.
- Missing affiliations, fields, or author identifiers can bias denominator-based comparisons.

## Links

- [Reliance on Science dataset](reliance_on_science_dataset.md)
- [MAG publication backbone](mag_publication_backbone.md)
- [patent citation-to-science link table](patent_citation_to_science_link_table.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [publication backbone access-coverage tradeoff](../validations/publication_backbone_access_coverage_tradeoff.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `pcs_companion_publication_denominator`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: PCS denominator table; uncited publication companion file; patent-science publication denominator; MAG companion denominator
