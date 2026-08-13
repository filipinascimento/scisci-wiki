# Journal-specific L-ratio baseline

## Summary

Contribution-statement source journals can have different baseline L-ratio levels before extrapolating flatness to broader corpora.

## Canonical Form

- Unit of analysis: journal, contribution-statement paper, L-ratio, publication year, or source corpus.
- Typical representation: journal-stratified L-ratio baseline table.
- Mechanism, measurement, or validation target: source-journal baseline variation in team flatness.
- Empirical signature: Nature, Science, PNAS, and PLOS ONE show different observed mean L-ratio levels.

## Uses in Science of Science

- Refines team-flatness measurement by linking it to [mag contribution statement linked panel](../datasets/mag_contribution_statement_linked_panel.md) and [author contribution statements](../datasets/author_contribution_statements.md).
- Useful as a reusable check when [lead role ratio](lead_role_ratio.md) is used in science-of-science inference.
- Creates cross-links to [contribution statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md) so the motif is not interpreted in isolation.

## Operationalization

- Stratify observed contribution statements by journal and year.
- Compute mean, median, and dispersion of L-ratio for each source journal.
- Use source-journal differences as extrapolation caveats for broader predicted panels.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) reports mean L-ratios of 0.38 for Nature and Science, 0.45 for PNAS, and 0.43 for PLOS ONE.
- The values provide a baseline for interpreting source-journal differences in observed flatness.

## Caveats

- Journal differences mix field composition, policy templates, and author-order cultures.
- A source-journal baseline is not automatically a field baseline.

## Links

- [MAG contribution-statement linked panel](../datasets/mag_contribution_statement_linked_panel.md)
- [Author contribution statements](../datasets/author_contribution_statements.md)
- [Lead-role ratio](lead_role_ratio.md)
- [Contribution-statement role coverage caveat](../validations/contribution_statement_role_coverage_caveat.md)
- [Same-source contribution prediction boundary](../validations/same_source_contribution_prediction_boundary.md)
- [Single-journal coauthorship coverage bias](../validations/single_journal_coauthorship_coverage_bias.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `journal_specific_l_ratio_baseline`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: journal L-ratio benchmark; contribution-source flatness baseline; journal role-structure baseline
