# Full-name self-citation matching

## Summary

Full-name self-citation matching flags self-citations by matching full first and last names between citing-paper authors and cited-reference authors, while deliberately avoiding full author disambiguation in very large corpora.

## Canonical Form

- Unit of analysis: citing author string, cited author string, paper-to-paper citation, author-to-author pair, or authorship.
- Typical representation: exact full-name match, usually ignoring middle initials, with citing-year assignment for the self-citation event.
- Method target: scalable self-citation detection when persistent author identifiers or full disambiguation are unavailable.
- Empirical signature: self-citations are inferred from shared full names rather than confirmed person identities.

## Uses in Science of Science

- Operationalizes [self-citation rates](../measures/self_citation_rates.md) and [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md) in historical corpora.
- Converts [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md) into measurable flagged edges.
- Works with the [JSTOR network dataset](../datasets/jstor_network_dataset.md), where long-run field coverage was prioritized over manual disambiguation.
- Relates directly to [author name disambiguation](author_name_disambiguation.md), [author-name blocking](author_name_blocking.md), and [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md).
- Supplies a methodological caveat for [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md), since name changes can undercount some self-citations.

## Operationalization

- Normalize author and cited-reference names into full first-name plus last-name strings.
- For each author-to-author citation pair, flag a self-citation when full first and last names match.
- Ignore middle initials when following King et al.'s implementation.
- Assign the self-citation date to the citing paper's publication year.
- Report the absence of full disambiguation and test sensitivity to homonyms, initials, hyphenation, transliteration, and name changes where possible.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) states that their self-citation rate calculation matches full first and last names of authors and cited references, disregarding middle initials.
- King et al. assign the date of a self-citation to the citing year rather than the cited year.
- The paper explicitly contrasts this scalable approach with full manual disambiguation, noting that hand disambiguation would force a much smaller sample and would undermine longitudinal, cross-disciplinary coverage.
- King et al. discuss a validation caveat: last-name changes due to marriage can make true self-citations go unrecognized and likely bias women's self-citation estimates downward slightly.

## Caveats

- Exact full-name matching can merge different people with the same name and split the same person across spelling variants, initials, transliterations, or name changes.
- The method is less reliable in high-homonym settings and in corpora with incomplete first names.
- It should be treated as a scalable measurement approximation, not as a gold-standard author identity system.
- Persistent identifiers, curated [author name disambiguation](author_name_disambiguation.md), or probabilistic linkage should be preferred when available and feasible.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [author name disambiguation](author_name_disambiguation.md)
- [author-name blocking](author_name_blocking.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [name-based demographic inference](name_based_demographic_inference.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `full_name_self_citation_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: full first-last name self-citation matching; exact-name self-citation detection; name-matched self-citation; citing-year self-citation assignment
