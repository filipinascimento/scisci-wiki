# Author self-citation definition choice

## Summary

Author self-citation definition choice is the methodological decision about what counts as an author-level self-citation, especially when citing and cited papers have multiple authors.

## Canonical Form

- Unit of analysis: citation relation, focal author, coauthor pair, author set overlap, paper pair, or evaluation portfolio.
- Typical representation: any-overlap rule, focal-author rule, coauthor self-citation rule, fractional overlap score, or self-citation-exclusion flag.
- Method target: make self-citation removal or reporting consistent with the evaluation question.
- Empirical signature: self-citation counts change when the rule shifts from any shared author to focal-author, coauthor, or fractional-overlap definitions.

## Uses in Science of Science

- Refines [self-citation rates](../measures/self_citation_rates.md) for author-level analyses.
- Supports [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md), [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md), and [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md).
- Depends on name and identity resolution, including [full-name self-citation matching](full_name_self_citation_matching.md), when persistent identifiers are absent.
- Provides a methods-level reason to report both raw and self-citation-excluded [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Choose a self-citation definition before computing citation indicators.
- For an any-overlap rule, flag a citation when citing and cited papers share at least one author.
- For a focal-author rule, flag citations made by the focal researcher to their own work.
- For coauthor or fractional rules, separate focal-author self-citations from coauthor citations and quantify author-set overlap.
- Document how author-name variants, disambiguation errors, and missing identifiers are handled.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) states that author self-citations are usually defined as citations where citing and cited publications share at least one author.
- Waltman reviews alternatives, including a distinction between author self-citations and coauthor self-citations.
- The review also reports a fractional author self-citation concept based on overlap between the citing and cited author sets.
- Waltman notes that algorithmic identification is difficult because a researcher's name may appear in different ways across publications.

## Caveats

- The any-overlap rule can overcount self-citation in large collaborations.
- Focal-author and coauthor rules require clearer author disambiguation and more explicit attribution logic.
- Removing self-citations may not remove downstream visibility effects if self-citations advertise work to later external citers.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [full-name self-citation matching](full_name_self_citation_matching.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [h-index self-citation sensitivity](../validations/h_index_self_citation_sensitivity.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `author_self_citation_definition_choice`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: author self-citation rule; self-citation overlap definition; coauthor self-citation distinction; fractional self-citation definition
