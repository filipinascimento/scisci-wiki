# Team-impact subfield prevalence

## Summary

Team-impact subfield prevalence is the validation that counts how many subfields show a team citation advantage rather than relying only on aggregate average impact.

## Canonical Form

- Unit of analysis: subfield, team-authored work, solo-authored work, relative team impact, self-citation treatment, or field-year panel.
- Typical representation: share of subfields with relative team impact above one.
- Validation target: determine whether team impact advantage is broad across subfields rather than driven by a few large fields.
- Empirical signature: most subfields show team impact ratios above one, including after self-citation adjustment.

## Uses in Science of Science

- Validates [team impact advantage](../mechanisms/team_impact_advantage.md) at the subfield level.
- Uses [relative team-impact ratio](../measures/relative_team_impact_ratio.md) as the underlying measure.
- Complements [self-citation-adjusted team impact](self_citation_adjusted_team_impact.md).
- Extends [team-growth subfield universality](team_growth_subfield_universality.md) from production growth to impact advantage prevalence.

## Operationalization

- Compute relative team impact by subfield and period.
- Count or weight subfields where the ratio exceeds one.
- Recompute after removing self-citations and after applying document-type, field, and year filters.
- Report both unweighted subfield prevalence and output-weighted prevalence.
- Flag subfields where solo or team denominators are too sparse.

## Evidence and Validations

- Verified full-text evidence from Wuchty et al. (2007) reports team citation advantage across broad areas and subfields.
- The paper also reports that the pattern remains widespread after self-citation removal.
- This motif separates a prevalence validation from the relative-impact measure itself.
- It helps protect team-impact claims from being overinterpreted from aggregate averages.

## Caveats

- Subfield definitions can change the prevalence estimate.
- Very small subfields may produce unstable ratios.
- Broad prevalence does not identify the cause of the advantage.

## Links

- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [relative team-impact ratio](../measures/relative_team_impact_ratio.md)
- [self-citation-adjusted team impact](self_citation_adjusted_team_impact.md)
- [team-growth subfield universality](team_growth_subfield_universality.md)
- [team-size field-growth control](team_size_field_growth_control.md)
- [field-year mean high-citation flag](../measures/field_year_mean_high_citation_flag.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; SciSciNet: W1965631677; WoS: unknown]

## Metadata

- Concept ID: `team_impact_subfield_prevalence`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: subfield prevalence of team advantage; RTI greater than one subfield share; team-impact breadth validation; team citation advantage prevalence
