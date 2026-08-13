# Author-to-author self-citation edges

## Summary

Author-to-author self-citation edges expand a paper-to-paper citation into all citing-author to cited-author pairs, allowing self-citation to be measured fractionally in multi-author work.

## Canonical Form

- Unit of analysis: citing author, cited author, paper-pair citation, authorship, field, year, or demographic group.
- Typical representation: author-pair citation edges, overlapping-author self-edge flag, self-citations per authorship, or fractional self-citation share.
- Data-representation target: avoid treating every multi-author paper-level citation with any author overlap as a full self-citation for every author.
- Empirical signature: paper-level self-citation rates are greater than or equal to author-to-author self-citation rates when multi-author overlap is partial.

## Uses in Science of Science

- Provides the edge-level representation behind [self-citation rates](../measures/self_citation_rates.md).
- Supplies the numerator for [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md).
- Supports demographic analyses such as [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).
- Requires [author name disambiguation](../methods/author_name_disambiguation.md) or explicit assumptions about name matching.
- Can be generated through [full-name self-citation matching](../methods/full_name_self_citation_matching.md) in corpora such as the [JSTOR network dataset](../datasets/jstor_network_dataset.md).
- Connects self-citation auditing to [paper-author-affiliation linkages](paper_author_affiliation_linkages.md) and citation-network representations.
- Requires [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md) checks because author-pair denominators grow with team size.

## Operationalization

- For each citation from a citing paper to a cited paper, create all ordered citing-author to cited-author pairs.
- Flag pairs as self-citations when the citing and cited author are the same person or are assumed to match by name.
- Aggregate flagged pairs by authorship, author group, field, year, or team position.
- Report author-to-author results separately from paper-level self-citation rates, because the denominators differ.
- Document whether authors are disambiguated, name-matched, or probabilistically linked.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) defines self-citation through author-to-author citations in JSTOR.
- Their example shows that a four-author paper citing a three-author paper creates 12 author-to-author citation pairs; if only one author overlaps, one of the 12 pairs is a self-citation.
- King et al. define self-citation rate as mean self-citations per authorship and use it to compare men's and women's self-citation behavior.
- King et al. also state that author-to-author self-citation fractions are less than or equal to paper-level self-citation fractions.
- Verified full-text evidence from Waltman (2016) reviews alternative author self-citation definitions, including coauthor self-citation and fractional concepts based on overlap between citing and cited author sets.

## Caveats

- Name matching without disambiguation can confuse homonyms and synonyms.
- Large-team papers create many author-pair opportunities, so denominators need explicit reporting.
- Author-to-author edges answer a different question than paper-level overlap: the former tracks individual self-reference, while the latter flags whether a paper cites any prior work by any coauthor.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [citation networks](citation_networks.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [paper-author-affiliation linkages](paper_author_affiliation_linkages.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `author_to_author_self_citation_edges`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: author-pair self-citations; authorship self-citation edges; fractional author self-citation; author-to-author citation pairs
