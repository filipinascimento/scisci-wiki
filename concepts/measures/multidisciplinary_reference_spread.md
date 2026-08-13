# Multidisciplinary reference spread

## Summary

Multidisciplinary reference spread measures how widely a journal, paper set, or field cites across distinct journal titles or specialties, as a possible indicator of cross-disciplinary information use.

## Canonical Form

- Unit of analysis: journal, article set, field, specialty, reference list, or source-journal profile.
- Typical representation: number of distinct cited journals, cited-title breadth, cited-specialty spread, or breadth normalized by total references.
- Measurement target: outward multidisciplinary reach in the references made by a citing unit.
- Empirical signature: a source with many distinct cited journals relative to its total references has broader reference spread than a source citing a narrower title set.

## Uses in Science of Science

- Adds a simple journal-level precursor to [interdisciplinarity dimensions](interdisciplinarity_dimensions.md) and [diversity measures](diversity_measures.md).
- Uses [source journal reference profile](../representations/source_journal_reference_profile.md) as the data representation.
- Helps distinguish journals or fields that draw from many specialties from those with concentrated reference lists.
- Provides a hypothesis-generating measure for [journal citation network mapping](../representations/journal_citation_network_mapping.md).

## Operationalization

- Normalize cited journal titles before counting distinct sources.
- Count the number of distinct cited journals or specialties in a reference set.
- Normalize by total references, article count, field size, or expected breadth when comparing journals.
- Optionally weight distinct cited journals by field distance or category disparity.
- Compare outward spread with incoming citation diversity and local field expectations.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) asks whether a wide multidisciplinary spread of titles cited in a journal's references can be interpreted as a measure of multidisciplinary activity.
- The paper contrasts examples such as *Ecology* citing more than 500 different journals in about 1,000 references and the *Journal of the American Chemical Society* citing about twice as many journals in ten times the references.
- Garfield frames the question as unresolved, making the measure useful but requiring validation and normalization.
- The same full text connects this outward spread to science-policy questions about multidisciplinary impact.

## Caveats

- Distinct cited-title counts are sensitive to total reference volume; normalization is mandatory for comparisons.
- Many cited journals can reflect review practices, broad methods, or noisy title normalization rather than true interdisciplinarity.
- Journal-title breadth should be complemented with field-distance or specialty-distance measures when possible.
- Outward reference spread does not prove that the citing work integrates knowledge from those fields.

## Links

- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [diversity measures](diversity_measures.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [cited journal title normalization](../methods/cited_journal_title_normalization.md)
- [category variety](category_variety.md)
- [category disparity](category_disparity.md)
- [citing-cited journal asymmetry](citing_cited_journal_asymmetry.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `multidisciplinary_reference_spread`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: cited-title breadth; outward journal-reference spread; multidisciplinary cited-journal breadth; reference-list journal diversity
