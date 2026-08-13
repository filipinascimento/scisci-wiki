# Self-citation team-size denominator effect

## Summary

Self-citation team-size denominator effect is the validation caveat that self-citation rates depend on how multi-author papers are expanded into paper-level, authorship-level, or author-to-author denominators.

## Canonical Form

- Unit of analysis: team size, authorship, paper-level citation, author-to-author pair, or self-citation rate.
- Typical representation: self-citations per authorship by number of authors, paper-level self-citation share, or author-pair denominator.
- Validation target: prevent team-size differences from being mistaken for individual self-citation behavior.
- Empirical signature: author-to-author self-citations per authorship decline with larger author teams, while paper-level overlap can behave differently.

## Uses in Science of Science

- Qualifies [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md) and [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md).
- Helps interpret [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md) when collaboration patterns differ by gender or field.
- Connects self-citation measurement to [article team-size distribution](../measures/article_team_size_distribution.md), [coauthorship networks](../representations/coauthorship_networks.md), and [responsible metrics](../measures/responsible_metrics.md).
- Separates paper-level self-citation flags from individual author-pair self-citation counts.

## Operationalization

- Compute self-citation under at least two definitions: paper-level overlap and author-to-author pair matching.
- Plot or model self-citations per authorship as a function of team size.
- Test whether demographic or field gaps interact with team size.
- Report whether large-team denominators create dilution, inflation, or both under the chosen definition.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) explains that a paper-level citation with one overlapping author can produce one self-citation among many author-to-author pairs.
- Their full text states that the fraction of author-to-author self-citations is always less than or equal to the paper-level self-citation fraction.
- King et al. find that sole-authored papers and smaller teams have higher mean self-citations per authorship, while author-to-author self-citations occur at lower rates in papers with more authors.
- The paper reports no interaction with gender in this team-size pattern.

## Caveats

- A denominator effect is not proof that collaboration size causes self-citation behavior.
- Large-team papers can create both more author-pair opportunities and more possible author overlap, depending on definition.
- Team-size adjustment can obscure author-position or contribution-role differences unless those layers are modeled separately.

## Links

- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [zero self-citation authorship share](../measures/zero_self_citation_authorship_share.md)
- [article team-size distribution](../measures/article_team_size_distribution.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [author self-citation definition choice](../methods/author_self_citation_definition_choice.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `self_citation_team_size_denominator_effect`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: team-size self-citation dilution; author-pair self-citation denominator; multi-author self-citation denominator; team-size self-citation caveat
