# Awake-intensity class midpoint encoding

## Summary

Post-sleep citation-count bins can be mapped to midpoint x-values for log-scale plotting of sleeping-beauty counts.

## Canonical Form

- Unit of analysis: awakening-intensity class, citation-count bin, log plot, sleeping-beauty count, or threshold grid.
- Typical representation: bin-midpoint encoding for awakening-intensity classes.
- Mechanism, measurement, or validation target: plotting convention for sleeping-beauty count matrices.
- Empirical signature: wake-intensity classes are represented by midpoint values while an open-ended high-citation class is handled separately..

## Uses in Science of Science

- Refines sleeping-beauty representation by linking it to [awakening intensity](../measures/awakening_intensity.md) and [sleeping beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md).
- Useful as a reusable check when [awakening intensity panel plot](awakening_intensity_panel_plot.md) is interpreted from citation histories.
- Adds cross-links to [awakening intensity panel plot](awakening_intensity_panel_plot.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- Encode wake classes [21,30], [31,40], [41,50], and [51,60] as 25, 35, 45, and 55 on the plotting axis.
- Treat the open-ended class above 60 as a separate tail bin.
- Report the binning convention before fitting or visually comparing count curves.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) describes Figure 1 as plotting four awakening-intensity classes centered at 25, 35, 45, and 55 with cw running from 10 to 100.
- The motif records a small but reproducible representation rule for the Grand Sleeping Beauty Equation figure.

## Caveats

- This is a plotting and bin-encoding convention, not a new sleeping-beauty measure.
- Open-ended tail bins can be visually underrepresented by midpoint encoding.

## Links

- [Awakening intensity](../measures/awakening_intensity.md)
- [Sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [Awakening-intensity panel plot](awakening_intensity_panel_plot.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `awake_intensity_class_midpoint_encoding`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/b:scie.0000018543.82441.f1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: cw midpoint encoding; awakening-bin midpoint plot; log-scale wake-intensity bins
