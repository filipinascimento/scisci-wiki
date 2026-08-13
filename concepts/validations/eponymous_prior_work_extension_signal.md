# Eponymous prior-work extension signal

## Summary

Eponymous prior-work extension signal uses named authors or named concepts from a paper's references appearing in the title or abstract as evidence that the focal work is intentionally extending prior work.

## Canonical Form

- Unit of analysis: focal paper, cited predecessor, title token, abstract token, author name, or named concept.
- Typical representation: binary or rate indicator for whether cited-author names or cited concepts appear in front matter.
- Validation target: distinguish developmental work that explicitly builds on predecessors from disruptive work that redirects attention away from them.
- Empirical signature: more developmental papers more often mention cited authors or named concepts in titles and abstracts.

## Uses in Science of Science

- Adds a text-based validation layer to [disruption measure validation](disruption_measure_validation.md).
- Connects citation-network structure to lexical evidence about how researchers frame their contributions.
- Helps separate [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md) from deliberate front-matter references to predecessors.

## Operationalization

- Extract cited-author surnames and named concepts from the focal paper's reference list.
- Search title and abstract text for exact or normalized matches.
- Compare the match rate across high-disruption and high-developmental papers within field and year.
- Treat name matching carefully because common surnames, transliteration, and field-specific eponyms can produce false positives.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) uses cited-author names and named concepts appearing in titles and abstracts as one validation signal for disruption scores.
- Wu et al. report that developmental articles are more likely than disruptive articles to contain these explicit predecessor references.
- The signal supports the interpretation that low-disruption papers are often framed as extensions or refinements of recognized prior work.

## Caveats

- Eponyms and author names vary by field, language, and writing convention.
- Absence of a name does not prove conceptual independence from prior work.
- The measure is best used as a validation signal rather than a stand-alone novelty or disruption metric.

## Links

- [disruption measure validation](disruption_measure_validation.md)
- [disruption index](../measures/disruption_index.md)
- [disruption and consolidation](../mechanisms/disruption_consolidation.md)
- [community-assigned catchphrases](../mechanisms/community_assigned_catchphrases.md)
- [citation context windows](../representations/citation_context_windows.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `eponymous_prior_work_extension_signal`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: cited-author title signal; predecessor-name extension signal; eponymic development signal; title-abstract predecessor naming
