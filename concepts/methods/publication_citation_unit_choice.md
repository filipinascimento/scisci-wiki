# Publication citation unit choice

## Summary

Publication citation unit choice is the methodological decision to model citations at the paper level rather than aggregating them immediately to authors, journals, institutions, or fields.

## Canonical Form

- Unit of analysis: cited publication, author portfolio, journal, institution, field, or citation database.
- Typical representation: paper-level citation distribution, author-level citation distribution, portfolio aggregation rule, or unit-of-analysis comparison.
- Method target: preserve the citation count as a property of a work before adding author productivity, coauthor, reputation, or portfolio-size effects.
- Empirical signature: paper-level and author-level citation distributions answer different questions and can have different tail forms.

## Uses in Science of Science

- Anchors [citation distribution scaling](../measures/citation_distribution_scaling.md) at the publication level.
- Separates paper popularity from [author citation composite indicators](../measures/author_citation_composite_indicator.md), [cumulative author reputation](../measures/cumulative_author_reputation.md), and author-level inequality.
- Helps avoid mixing paper quality or visibility with author productivity, coauthor attributes, and portfolio size.
- Provides a clean input for [citation impact indicators](../measures/citation_impact_indicators.md) before aggregation choices are applied.

## Operationalization

- Decide whether each record is a paper, author, journal, institution, or field observation.
- Count received citations to each paper for a defined database snapshot and citation window.
- If aggregating to authors or institutions, document the counting rule, including full versus fractional credit and self-citation handling.
- Also document whether the chosen citation indicator is size-dependent or size-independent before comparing portfolios of different output size.
- Compare paper-level and author-level results when a claim could change with the unit of analysis.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) explicitly focuses on citations of publications rather than citations of specific authors.
- Redner argues that a publication citation count reflects the publication itself, while an author citation count also reflects total number of publications, the quality mix across those publications, and coauthor attributes.
- The paper also notes that most-cited author data available at the time could reconstruct only the large-citation tail, whereas the paper-level datasets supported analysis of the whole publication distribution.
- This makes publication-level counting a prerequisite for studying [uncited-paper mass](../measures/uncited_paper_mass.md) and lower-tail citation behavior.

## Caveats

- Publication-level citation counts still depend on field, age, document type, database coverage, and reference practices.
- Paper-level analysis does not solve credit allocation among coauthors.
- Author-level measures are still appropriate when the target is career, reputation, or productivity, but they should be treated as a different unit.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [author citation composite indicator](../measures/author_citation_composite_indicator.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [full versus fractional citation counting](../measures/full_fractional_citation_counting.md)
- [citation-indicator size dependence](../measures/citation_indicator_size_dependence.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `publication_citation_unit_choice`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Aliases: paper-level citation unit; publication citation unit; paper citation distribution unit; publication-level citation counting
