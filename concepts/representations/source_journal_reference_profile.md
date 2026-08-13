# Source journal reference profile

## Summary

A source journal reference profile represents a citing journal by its reference volume, cited-title mix, and reference-age distribution.

## Canonical Form

- Unit of analysis: source or citing journal within a citation index.
- Typical representation: number of references made by a journal, distribution of reference ages, and cited journals with frequencies.
- Mechanism or measurement target: a journal's outward citation behavior and information-use pattern.
- Empirical signature: source journals differ in reference-list length, aging structure, and concentration on particular cited journals.

## Uses in Science of Science

- Complements [cited journal citation profiles](cited_journal_citation_profile.md) by describing the citing side of a journal-citation matrix.
- Supplies edge weights for [journal citation network mapping](journal_citation_network_mapping.md) and journal-level [citation networks](citation_networks.md).
- Supports source-level audits in [Web of Science](../datasets/web_of_science.md) and other curated citation indexes.

## Operationalization

- Define a source journal set and citation census window.
- For each source journal, count references observed in the window.
- Split references by cited publication date or age.
- List cited journal titles and frequencies, optionally thresholding low-frequency cited titles into a residual group.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) describes a third SCI-derived listing arranged by citing journal.
- For each SCI-covered source journal, the listing reports the number of references recorded in the last quarter of 1969, a distribution by publication date, and the reference journals cited with their frequencies.
- Garfield's source-side table is an early operational form of a journal reference profile, distinct from received citation counts.
- The same representation supports [multidisciplinary reference spread](../measures/multidisciplinary_reference_spread.md) and [citing-cited journal asymmetry](../measures/citing_cited_journal_asymmetry.md).

## Caveats

- Reference practices vary by field, document type, and journal editorial norms.
- Profiles depend on whether all article types, letters, reviews, and communications are included.
- Low-frequency cited titles can be analytically important even when grouped away for compact display.

## Links

- [cited journal citation profile](cited_journal_citation_profile.md)
- [multidisciplinary reference spread](../measures/multidisciplinary_reference_spread.md)
- [citing-cited journal asymmetry](../measures/citing_cited_journal_asymmetry.md)
- [journal citation network mapping](journal_citation_network_mapping.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [citation networks](citation_networks.md)
- [Web of Science](../datasets/web_of_science.md)
- [citation data census dates](../methods/citation_data_census_dates.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `source_journal_reference_profile`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: citing-journal profile; source journal profile; journal reference profile; outward journal citation profile
